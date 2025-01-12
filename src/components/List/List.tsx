import { getCountries } from "@/api/getCountries";

import ClientList from "./ClientList";
import Container from "./Container";

const List = async () => {
  const data = await getCountries();

  if (typeof data === "string") {
    return data;
  }

  return (
    <Container>
      <ClientList countries={data} />
    </Container>
  );
};

List.displayName = "List";

export default List;
