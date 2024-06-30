import * as Avatar from '@radix-ui/react-avatar';
import { styles } from './style'; // Importez styles depuis styles.ts

interface Props {
  imageUrl: string;
  altText: string;
  fallbackText: string;
}

const myAvatar = ({ imageUrl, altText, fallbackText }: Props) => (
  <div style={{ display: 'flex', gap: 20 }}>
    <Avatar.Root style={styles.AvatarRoot as React.CSSProperties}>
      <Avatar.Image
        style={styles.AvatarImage as React.CSSProperties}
        src={imageUrl}
        alt={altText}
      />
      <Avatar.Fallback style={styles.AvatarFallback} delayMs={600}>
        {fallbackText}
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default myAvatar;