import "./Card.styles.scss";

interface ICardProps {
  image: string;
  name: string;
  abilities?: string[];
}

export function Card({ image, name, abilities }: ICardProps) {
  return (
    <div className="card">
      <img src={image} width={200} height={200} />
      <h2>{name}</h2>
      {abilities && (
        <>
          <p className="card-abilities__title">Habilidades</p>
          <div className="card-abilities__box">
            {abilities.map((abilitie) => (
              <span className="card-abilities__item" key={abilitie}>
                {abilitie}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
