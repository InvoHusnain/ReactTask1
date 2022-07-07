import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../Components/process.css";
import Item from "@mui/material/Grid";

function Process() {
    return (
        <div className="process-main">
            <Container>
            <Grid>
                <Grid className="process-head" item>
                    <h2>Contact Process</h2>
                </Grid>
            </Grid>
            </Container>
            <div>
                <div className="arrow-main">
                <Grid item xs={2}>
                    <Item>
                        <div className="process-points-0">
                            <h2>
                                Estimate<br />inquiry
                            </h2>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <div className="process-points-1">
                            <h2>
                                Both problems<br />Meeting
                            </h2>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <div className="process-points-2">
                            <h2>
                            Consulty <br/>Estimate
                            </h2>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <div className="process-points-3">
                            <h2>
                            Development <br/>team Launch
                            </h2>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <div className="process-points-4">
                            <h2>
                            Signature
                            </h2>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <div className="process-point-5">
                            <h2>
                            Development<br/>-Operation
                            </h2>
                        </div>
                    </Item>
                </Grid>
                </div>
            </div>
        </div>
    );
}

export default Process;
