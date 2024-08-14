import { cn } from '@/lib/utils';
import Image from 'next/image';
import LogoImageUrl from '/public/logo.png';

type Props = React.HTMLAttributes<HTMLElement> & { width?: number; height?: number };

export const LogoImage = ({ className, width, height }: Readonly<Props>) => {
  return (
    <Image className={cn('', className)} src={LogoImageUrl} alt="Logo" width={width || 75} height={height || 75} />
  );
};
