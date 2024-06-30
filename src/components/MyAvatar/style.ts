import { blackA, violet } from '@radix-ui/colors';

export const styles = {
  AvatarRoot: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    userSelect: 'none',
    width: '60px',
    height: '60px',
    borderRadius: '100%',
    backgroundColor: blackA.blackA3,
  },
  AvatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
  },
  AvatarFallback: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    color: violet.violet11,
    fontSize: '15px',
    lineHeight: 1,
    fontWeight: 500,
  },
};