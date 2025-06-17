import { CardMedia, Typography } from '@mui/material';
import Spacer from './Spacer';
import StyledSegmentText from './StyledSegmentText';
import NodeIterator from './NodeIterator';
import Particles from '../Backgrounds/Particles/Particles';
import GlitchChildren from './GlitchChildren/GlitchChildren';

export default function Lander() {
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
        
        <GlitchChildren
          speed={1}
          enableShadows={true}
        >
          <CardMedia
            component="img"
            alt="Lander Image"
            image="7.svg"
            sx={{
              width: '1000px',
              height: '300px',
              borderRadius: 8,
            }}
          />
        </GlitchChildren>
        
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
          <StyledSegmentText
            segments={[
              { text: 'R', color: '#ff3131' },
              { text: 'EAL ' },
            ]}
          />

          <StyledSegmentText
            segments={[
              { text: 'L', color: '#ff3131' },
              { text: 'OOSE ' },
            ]}
          />
          <NodeIterator
            interval={1000}>
            <StyledSegmentText
              segments={[
                { text: 'G', color: '#ff3131' },
                { text: 'AME ' },
              ]}
            />
            <StyledSegmentText
              segments={[
                { text: 'A', color: '#ff3131' },
                { text: 'PP ' },
              ]}
            />
            <StyledSegmentText
              segments={[
                { text: 'W', color: '#ff3131' },
                { text: 'EB ' },
              ]}
            />
            <StyledSegmentText
              segments={[
                { text: 'C', color: '#ff3131' },
                { text: 'LOUD ' },
              ]}
            />
          </NodeIterator>
          <StyledSegmentText
            segments={[
              { text: 'CO', color: '#ff3131' },
              { text: 'NCEPTS ' },
            ]}
          />
        </Typography>
        <Spacer />
        <Typography sx={{
          fontFamily: '"Staatliches", sans-serif',
          textShadow: '8px 8px 8px rgba(0, 0, 0, 1)',
        }} variant="h5" color="text.primary">
          Real loose....
        </Typography>
        <Spacer />
      </div>
    </div>
  );
}
