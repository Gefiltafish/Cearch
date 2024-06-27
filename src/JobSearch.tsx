import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getGroqChatCompletion(content: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `create a JSON list called keywords with the keywords of only the required technologies by the job posting: ${content}`,
      },
    ],
    model: "llama3-8b-8192",
    response_format: { type: "json_object" },
  });
}

export const JobSearch = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [techs, setTechs] = useState<[]>([]);
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setJobDescription(event.target.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const chatCompletion = await getGroqChatCompletion(jobDescription);
    const techs = JSON.parse(
      chatCompletion.choices[0]?.message?.content || "{}"
    );

    console.log(techs);

    setIsLoading(false);
    setTechs(techs.keywords || []);
  };
  const handleGoPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/results");
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Job search</label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <textarea
              className="textarea textarea-bordered h-96 w-[36rem] my-4 p-2"
              placeholder="Paste job description"
              style={{ height: "24rem", width: "36rem" }}
              value={jobDescription}
              onChange={handleChange}
            ></textarea>
            <button className="btn btn-primary w-1/3" type="submit">
              Generate
            </button>
          </div>
        </form>
        <div className="chat chat-start"></div>
      </div>
      {isLoading && <span>Loading...</span>}
      {techs.length > 0 && (
        <div style={{ height: "24rem", width: "36rem" }}>
          <ul style={{ listStyle: "none" }}>
            {techs.map((tech) => (
              <li key={tech}>
                <label>{tech}</label>
                <input type="checkbox" defaultChecked></input>
              </li>
            ))}
            {/* Example techs to be displayed from the job description  */}
          </ul>
          <button type="button" onClick={handleGoPress}>
            Find consultants
          </button>
        </div>
      )}
      {isLoading && <span>Loading...</span>}
    </div>
  );
};
