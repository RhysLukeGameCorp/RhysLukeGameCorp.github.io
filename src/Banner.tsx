import { CardMedia, Typography } from '@mui/material';
import Spacer from './Spacer';
import Particles from '../Backgrounds/Particles/Particles'

export default function BannerImage() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Particles
        particleColors={['#FFF', '#AAA']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <CardMedia
          component="img"
          alt="Banner Image"
          image="7.svg"
          sx={{
            width: '1000px',
            height: '300px',
            borderRadius: 8,
          }}
        />
        <Typography
          sx={{
            fontFamily: '"Staatliches", sans-serif',
            textShadow: '8px 8px 8px rgba(0, 0, 0, 1)',
            fontWeight: '400',
            textTransform: 'uppercase',
            fontSize: '4.5rem',
          }}
          variant="h1"
          color="text.primary"
        >
          <span style={{ color: '#ff3131' }}>R</span>EAL&nbsp;
          <span style={{ color: '#ff3131' }}>L</span>OOSE&nbsp;
          <span style={{ color: '#ff3131' }}>G</span>AME&nbsp;
          <span style={{ color: '#ff3131' }}>CO</span>NCEPTS
        </Typography>
        <Spacer />
        <Typography sx={{
          textShadow: '8px 8px 8px rgba(0, 0, 0, 1)',
          fontWeight: '300',
          width: "70%"
        }} variant="h5" color="text.primary">
          Real loose....
        </Typography>
        <Spacer />
      </div>
    </div>
  );
}
