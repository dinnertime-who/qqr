'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useFreeQrGenerateContextContext } from '../_contexts/free-qr-generate.context';

type Props = React.HTMLAttributes<HTMLElement>;

export const QrGeneratorInput = ({ className }: Readonly<Props>) => {
  const { inputRef } = useFreeQrGenerateContextContext();

  return (
    <div
      className={cn(
        'text-lg @lg:text-2xl',
        'w-full flex items-center border-2 rounded-full overflow-hidden',
        'transition-shadow duration-200',
        'ring-offset-background [&:has(input:focus-visible)]:ring-2 [&:has(input:focus-visible)]:ring-ring [&:has(input:focus-visible)]:ring-offset-0',
        className,
      )}
    >
      <span className="pl-4 @lg:pl-8">https://</span>
      <Input
        ref={inputRef}
        className="border-none bg-transparent py-3 @lg:py-4 h-auto px-0 pl-1 pr-4 @lg:pr-8"
        placeholder="sqr.dinnertimes.app"
        variant={'no-ring'}
      />
    </div>
  );
};
