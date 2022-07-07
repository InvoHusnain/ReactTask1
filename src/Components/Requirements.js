import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import requirement from "../images/requiremnt.svg";
import "../Components/requirements.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import {theme} from '../Components/styles';
import {ThemeProvider} from '@mui/material';

function Requirements() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth= 'desktop'>
      <Grid className="req-main" container>
        <Grid item desktop={5} tablet={5} mobile={12}>
          <div className="req-image">
            <img src={requirement} alt="picture" />
          </div>
        </Grid>
        <Grid item desktop={7} tablet={7} mobile={12}>
          <div className="req-content">
            <div className="req-header">
              <h3>
                <span className="star-blue">Star-blue</span>{" "}
                <span className="development">provides a development</span> form
                suitable for KH requirements
              </h3>
            </div>
            <div className="req-table">
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead className="row">
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell className="labo-heading" align="left">
                        Labo
                      </TableCell>
                      <TableCell className="project-heading" align="left">
                        Project-based
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        className="row-head-1" component="th" scope="row">
                        Shape
                      </TableCell>
                      <TableCell className="labo-point-1" align="left">
                        <ul>
                          <li>Power x Time</li>
                        </ul>
                      </TableCell>
                      <TableCell className="project-point-1" align="left">
                        <ul>
                          <li>Form a team in a week</li>
                          <li>
                            Accumulate development experience for long-term
                            projects
                          </li>
                          <li>Easily change requirements</li>
                        </ul>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className="row-head-2" component="th" scope="row">
                        Characteristics
                      </TableCell>
                      <TableCell className="labo-point-2" align="left">
                        <ul>
                          <li>Product-based contract</li>
                        </ul>
                      </TableCell>
                      <TableCell className="project-point-2" align="left">
                        <ul>
                          <li>Ease of cost control</li>
                          <li>Quick product confirmation</li>
                          <li>
                            Product quality assurance is handled by the
                            development team
                          </li>
                        </ul>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <Button className="req-btn">Contact us for a quotes</Button>
        </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
  );
}

export default Requirements;
