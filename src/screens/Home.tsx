import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import University from "../components/University";
import { IUniversity } from "../interfaces/IUniversity";
import UniversitiesService from "../services/UniversitiesService";
import { Container } from "@mui/material";

export default function BasicGrid() {
  const [universities, setUniversities] = React.useState([] as IUniversity[]);
  React.useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    let uni = await UniversitiesService.getAll();
    setUniversities(uni);
  };
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {universities && universities?.map((uni, index) => (
            <Grid item xs key={index}>
              <University
                alpha_two_code={uni.alpha_two_code}
                country={uni.country}
                domains={uni.domains}
                name={uni.name}
                web_pages={uni.web_pages}

              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
      

  );
}
