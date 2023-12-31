import { FC, useState } from 'react';
import Button from '../components/button';
import Stack from '../components/stack';
import Grid from '../components/grid';
import Banner from '../components/banner';
import PFP from '../assets/pfp/legends.png';
import Card from '../components/card';
import GenesisPFP from '../assets/pfp/genesis.png';
import DegenHoursPFP from '../assets/pfp/degenhours.png';
import FrogtoberPFP from '../assets/pfp/frogtober.png';
import LegendsPFP from '../assets/pfp/legends.png';
import MutantsPFP from '../assets/pfp/mutants.png';
import SerumPFP from '../assets/pfp/serum.png';
import ElementalsPFP from '../assets/pfp/elementals.png';
import Dialog from '../components/dialog';
import Body from '../components/body';
import DialogHeader from "../assets/dialog-header.png";
import AmountInput from '../components/amountInput';

export const Home: FC<{}> = () => {

  const [isRevealed, setIsRevealed] = useState(false);
  const [serumAmount, setSerumAmount] = useState(0);

    // Function to decrease the serum amount
    const decreaseAmount = () => {
      if (serumAmount > 1) {
        setSerumAmount(serumAmount - 1);
      }
    };
  
    // Function to increase the serum amount
    const increaseAmount = () => {
      setSerumAmount(serumAmount + 1);
    };

  return (
    <>

      <Stack direction='VERTICAL' localStyles={{marginTop: 86, marginBottom: 94, '@media (min-width: 1080px)': { marginBottom: 50,}}}>

        <Banner pfp={PFP} heading='PAYC Legends' description='Elvis Presley via the Rockabilly Hall of Fame Museum'>
          <Button size='M' variant="PRIMARY" as="a" href='https://hub.auraexchange.org/collection/ethereum/0x0f4186a53774f4c73cb90f278d26094cce765720' target="_blank">View Collection</Button>
        </Banner>

        <Grid
          columns={1}
          localStyles={{
            padding: 'var(--scale-24)',
            gap: 'var(--scale-24)',
            gridTemplateColumns: '1fr',
            '@media (min-width: 600px)' :{
              padding: 'var(--scale-48)',
              gap: 'var(--scale-48)',
            },
            '@media (min-width: 800px)' :{
              gridTemplateColumns: '1fr 1fr',
            },
            '@media (min-width: 1200px)' :{
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
            },
            '@media (min-width: 2000px)' :{
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            },
          }}>
          <Card heading="Genesis" description='Collection Size • 7,777' pfp={GenesisPFP} direction="VERTICAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/Ethereum/0x2d0d57d004f82e9f4471caa8b9f8b1965a814154' target="_blank">View Collection</Button>
            <Button as="a" size='M' variant="PRIMARY" href='/portals'>View Portals</Button>
          </Card>
          <Card heading="Degen Hours" description={`Untransferrable & Secure`} pfp={DegenHoursPFP} direction="VERTICAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0x577c0379ba192c3293f207b40327f34d18f9e7e3' target="_blank">View Collection</Button>
            <Button as="a" size='M' variant="PRIMARY" href='https://degen.pepeapeyachtclub.com' target="_blank">Select Portal</Button>
          </Card>
          <Card heading="Frogtober" description='Chance to Pull a Rare' pfp={FrogtoberPFP} direction="VERTICAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0xea3a82c8fdd0f7e7fd36a58900ff9aa39995c9ce' target="_blank">View Collection</Button>
            <Button as="a" size='M' variant="PRIMARY" href='https://frogtober.pepeapeyachtclub.com' target="_blank">Select Portal</Button>
          </Card>
          <Card heading="Legends" description='Past &amp; Present Icons' pfp={LegendsPFP} direction="VERTICAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0x0f4186a53774f4c73cb90f278d26094cce765720' target="_blank">View Collection</Button>
            <Button as="a" size='M' variant="SECONDARY" href='...' target="_blank" disabled>Portal Paused</Button>
          </Card>
          <Card heading="Mutants" description='Community-Designed' pfp={MutantsPFP} direction="VERTICAL">
            <Button as="a" size='M' variant='SECONDARY' href='https://hub.auraexchange.org/collection/ethereum/0x0802f7a7c48426e972a30aaab3c2f35c14a35bc8' target="_blank">View Collection</Button>
            <Button size='M' variant='SECONDARY' href='...' target="_blank" disabled>Burn 5 Mutants 🔥</Button>
          </Card>
          <Card heading="Serum" description='Coming soon' pfp={SerumPFP} direction="VERTICAL">
            {/* <Button size='M' variant="SECONDARY" href='...' target="_blank" disabled>Buy with Sheesh</Button> */}
            <Button size='M' variant="SECONDARY" href='...' target="_blank" onClick={() => setIsRevealed(!isRevealed)}>Buy with Sheesh</Button>
            <Button size='M' variant='SECONDARY' href='...' target="_blank" disabled>Burn 5 Mutants 🔥</Button>
          </Card>
          <Card heading="Elementals" description='Coming soon' pfp={ElementalsPFP} direction="VERTICAL">
            <Button size='M' variant='SECONDARY' href='...' target="_blank" disabled>View Collection</Button>
            <Button size='M' variant="SECONDARY"href='...' target="_blank" disabled>Apply Serum</Button>
          </Card>


          {/* SERUM DIALOG */}
          {isRevealed && 
            // When live replace the message of "Coming Soon" to "Purchase serums with $SHS".
            // When live uncomment the button.
            <Dialog backdropClose={() => setIsRevealed(!isRevealed)} image={DialogHeader}>
              <Body size='L'>Coming Soon</Body>
              <AmountInput decrease={decreaseAmount} increase={increaseAmount} amount={serumAmount} />
              <Stack direction="HORIZONTAL" space={'var(--scale-12)'} localStyles={{justifyContent: 'center'}}>
                <Button size='M' variant="SECONDARY" onClick={() => setIsRevealed(!isRevealed)} localStyles={{marginTop: 'var(--scale-8)'}}>Close</Button>
                <Button size='M' variant="PRIMARY" onClick={() => {}} localStyles={{marginTop: 'var(--scale-8)'}}>$$Sheesh</Button>
              </Stack>
            </Dialog>}

        </Grid>

      </Stack>
    </>
  );
}

export default Home;
