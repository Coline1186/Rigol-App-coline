import { useNavigate } from "react-router-dom";
import "./SoloPage.css";

function FinishSoloGame() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="display-solo-page">
        <div className="play-solo">
          <h2 className="btn-change-solo">Fini de rire !</h2>
          <p className="p-multi">C'est plus drôle</p>
        </div>
        <button onClick={() => navigate("/")} className="btn-laught">
          Retour
        </button>
      </section>
    </div>
  );
}

export default FinishSoloGame;
