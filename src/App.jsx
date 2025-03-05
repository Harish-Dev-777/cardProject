import React from "react";
import commucationImg from "./assets/communication.avif";
import TeamWork from "./assets/teamwork.avif";
import MultiTask from "./assets/multitask.avif";
import Card from "./components/Card";

const App = () => {
  let comm_content =
    "Communication is the exchange of information, ideas, or emotions between individuals. Effective communication ensures clarity, understanding, and meaningful interaction.";
  let teamwork_content =
    "Teamwork is the collaborative effort of a group to achieve a common goal efficiently. It fosters unity, trust, and shared responsibility for success.";
  let multitask_content =
    "Multitasking is the ability to handle multiple tasks simultaneously, improving efficiency and productivity. It requires focus, time management, and adaptability to balance different responsibilities effectively.";

  return (
    <div>
     <div className="card-container">
     <Card
        image={commucationImg}
        title={"Communication"}
        content={comm_content}
      />
      <Card image={TeamWork} title={"Team Work"} content={teamwork_content} />
      <Card image={MultiTask} title={"MultiTask"} content={multitask_content} />
     </div>
    </div>
  );
};

export default App;
