let spaceships = [];

function addSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false,
  };

  spaceships.push(spaceship);
  alert(`A nave ${spaceship.name} foi registrada com sucesso!`);
}

const spaceshipName = String(prompt("Digite o nome da Nave:"));
const spaceshipPilot = String(prompt("Digite o nome do Piloto:"));
const spaceshipCrewLimit = Number(
  prompt("Digite o Limite de tripulantes da Nave:")
);

addSpaceship(spaceshipName, spaceshipPilot, spaceshipCrewLimit);

function findSpaceship(name: string) {
  let spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  };

  spaceship = spaceships.find((ship) => ship.name === name);

  return spaceship;
}

function addCrewMember(
  member: string,
  spaceship: { name: string; crewLimit: number; crew: string[] }
) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert(`${member} não pode ser adicionado, limite excedido`);
  } else {
    spaceship.crew.push(member);
    alert(`${member} foi adicionado a tripulação da ${spaceship.name}`);
  }
}

function MenuOptionAddMember() {
  const member = String(prompt("Qual o nome do tripulante"));
  const spaceshipName = String(
    prompt(`Para qual nave o ${member} de ser adicionado`)
  );

  const spaceship = findSpaceship(spaceshipName);

  if (spaceship) {
    const confirmation = confirm(
      `Confirma a inclusão do ${member} na tripulação da ${spaceshipName}?`
    );

    if (confirmation) {
      addCrewMember(member, spaceship);
    }
  }
}

MenuOptionAddMember();
