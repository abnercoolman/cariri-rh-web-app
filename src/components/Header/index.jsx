import { Container, Profile, DropdownList } from "./styles";

// eslint-disable-next-line react/prop-types
export function Header() {
  return (
    <Container>
      <Profile>
        <div>
          <input placeholder="Buscar" />
        </div>
      </Profile>
      <Profile>
        <div>
          <img
            src="https://github.com/abnercoolman.png"
            alt="Foto do Usuário"
          />
          <strong>Abner Colman</strong>
          <DropdownList>
            <span className="material-symbols-outlined">expand_more</span>
          </DropdownList>
        </div>
      </Profile>
    </Container>
  );
}
