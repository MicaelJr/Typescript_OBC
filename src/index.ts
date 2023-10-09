function sendSpaceship(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 10,
    inMission: true,
    crew: [],
  };
  alert(
    `A nave ${spaceship.name} foi lançada em missão, ao comando do Capitão ${spaceship.captain}, acelerando a ${spaceship.speed}nos.`
  );
  return spaceship;
}
function accelerate(
  targetSpeed: number,
  spaceship: { name: string; speed: number }
) {
  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`);
  } else if (spaceship.speed < targetSpeed) {
    alert(
      `Propulsão ativada, estamos aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`
    );
  } else {
    alert(`${spaceship.name} mantendo a velocidade controlada.`);
  }
}

const spaceshipName = String(prompt(`Insira o nome da nave.`));
const spaceshipCaptain = String(prompt("Insira o nome do(a) Capitão da nave."));

const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);

const speed = Number(prompt(`A qual velocidade deseja voar.`));

accelerate(speed, currentShip);

// const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);

// const speedSpaceship = Number(prompt("A qual velocidade deseja voar?"));

// sendSpaceship(spaceshipName, spaceshipCaptain);
// accelerate(speedSpaceship);
