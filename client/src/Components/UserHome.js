import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function UserHome() {
  const [bosses, setBosses] = useState([]);
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    fetch("/api/bosses")
      .then((r) => r.json())
      .then((bossList) => setBosses(bossList));
  }, []);

  useEffect(() => {
    fetch("/api/builds")
      .then((r) => r.json())
      .then((buildList) => setBuilds(buildList));
  }, []);

  return (
    <div>
      {bosses[0]
        ? bosses.map((boss) => {
            return (
              <Card key={boss.id}>
                {boss.name}
                <Card.Img src={boss.image_url} alt={boss.name} />
              </Card>
            );
          })
        : null}
      {builds[0]
        ? builds.map((build) => {
            return (
              <Card key={build.id}>
                {build.name}
                <Card.Img src={build.image_url} alt={build.name} />
              </Card>
            );
          })
        : null}
    </div>
  );
}

export default UserHome;
