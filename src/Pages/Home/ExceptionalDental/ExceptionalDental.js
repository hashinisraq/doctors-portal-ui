import React from 'react';
import Grid from '@mui/material/Grid';
import treatment from '../../../images/treatment.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ExceptionalDental = () => {
    return (
        <Container sx={{ mt: 9 }}>
            <Grid container spacing={2} sx={{pt:4}}>
                <Grid item xs={12} sm={5} md={5}>
                    <img style={{ width: '90%', height: "auto" }} src={treatment} alt="" />
                </Grid>
                <Grid sx={{ textAlign: 'left', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} item xs={12} sm={7} md={7}>
                    <Box>
                        <Typography sx={{ mb: 2 }} variant="h4">
                            Exceptional Dental <br />
                            Care, on Your Terms
                        </Typography>
                        <Typography variant="caption">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sunt voluptatibus a quam temporibus nobis, repellendus fugiat unde veritatis quod eos? Quae vero laudantium soluta? Tenetur reprehenderit facere, sed voluptate distinctio ex debitis nihil voluptates dolorem eligendi repellendus expedita autem odit soluta? Rem, tenetur sunt. Fuga perspiciatis accusamus obcaecati, minus sequi illum consectetur nisi possimus expedita hic provident. Eum recusandae eveniet corrupti ipsa officia magnam, quae modi repellendus quod fugit. Aspernatur qui voluptate magnam impedit nisi voluptatum iure fuga exercitationem quidem laudantium blanditiis commodi quisquam et ea deleniti non, accusamus illo nam. Exercitationem porro fugit sequi repellendus magnam modi aut autem quibusdam ex inventore suscipit fugiat atque ab nobis consequatur, maiores incidunt! Tempora, saepe animi blanditiis nesciunt illo nihil! Corrupti, nemo! Qui ullam quam molestiae voluptatibus commodi beatae similique, aliquam blanditiis animi praesentium sint veritatis minima soluta, in nemo aspernatur sapiente corporis maiores repellat eaque optio magni? Inventore, iure iusto?
                        </Typography>
                        <br />
                        <Button sx={{ mt: 4 }} variant='contained'>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default ExceptionalDental;