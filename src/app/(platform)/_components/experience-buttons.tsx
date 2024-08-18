'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useFreeQrGenerateContextContext } from '../_contexts/free-qr-generate.context';
import { verifyUrl } from '../_server/actions';

type Props = React.HTMLAttributes<HTMLElement> & {
  i18n: {
    LINK: string;
    BUTTON: string;
  };
};

export const ExperienceButtons = ({ className, i18n }: Readonly<Props>) => {
  const { getInputedUrl, focusInputRef } = useFreeQrGenerateContextContext();

  const onClickFreeStartButton = async () => {
    const verified = await verifyUrl(getInputedUrl());

    if (!verified) {
      return focusInputRef();
    }
  };

  return (
    <div className={cn('flex flex-col @md:flex-row justify-end w-full gap-2 @lg:gap-4', className)}>
      <Link
        href={'/sign-in'}
        type="button"
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'rounded-full text-foreground text-base @xl:text-xl h-auto py-3 @xl:py-4 px-6 @xl:px-8',
        )}
      >
        {i18n.LINK}
      </Link>
      <Button
        type="button"
        className="rounded-full text-base @xl:text-xl h-auto py-3 @xl:py-4 px-6 @xl:px-8"
        onClick={() => onClickFreeStartButton()}
      >
        {i18n.BUTTON}
      </Button>
    </div>
  );
};
