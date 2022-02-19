import React from "react";
import Title from "./Title";
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
          <Title headline="Missões" />
          <div className="missionTypes">
          {missions.map((mission) => (
              <MissionCard
               key={`Missao: ${mission.name}`}
               name={`Missão:  ${mission.name}`}
               year={`Ano: ${mission.year}`}
               country={`País: ${mission.country}`}
               destination={`Destino: ${mission.destination}`}
              />
          ))}
          </div>
      </div>
    );
  }
}

export default Missions;
