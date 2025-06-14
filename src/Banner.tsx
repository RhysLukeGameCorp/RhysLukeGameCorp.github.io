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
        image="profile.png"
        sx={{
          width: '250px',
          borderRadius: 8,
        }}
      />
      <Typography sx={{
        textShadow: '8px 8px 8px rgba(0, 0, 0, 1)',
        fontWeight: '600'
      }} variant="h1" color="text.primary">
        Real Loose Game Concepts
      </Typography>
      <Spacer />
      <Typography sx={{
        textShadow: '8px 8px 8px rgba(0, 0, 0, 1)',
        fontWeight: '300',
        width:"70%"
      }} variant="h5" color="text.primary">
        A group of friends building games
      </Typography>
      <Spacer />
    </div>
    </div>
  );
}
