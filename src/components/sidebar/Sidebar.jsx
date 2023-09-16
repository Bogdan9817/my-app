import { Grid, Link, ListItem, List } from "@mui/material";
import "./styles.scss";

export default function Sidebar() {
  return (
    <Grid sx={{ textAlign: "center" }} item md={2}>
      <h2>Agile</h2>
      <nav className='sidebar__menu-nav'>
        <List>
          <ListItem>
            <h4>
              <Link
                href='#'
                sx={{ textDecoration: "none" }}
                color={"black.main"}
              >
                AI Agile Coach
              </Link>
            </h4>
          </ListItem>
        </List>
      </nav>
    </Grid>
  );
}
