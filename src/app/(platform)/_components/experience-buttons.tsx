import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = React.HTMLAttributes<HTMLElement>;

export const ExperienceButtons = ({ className }: Readonly<Props>) => {
  return (
    <div className={cn('flex flex-col @sm:flex-row justify-end w-full gap-2 @lg:gap-4', className)}>
      <Button type="button" className="rounded-full text-base @lg:text-xl h-auto py-3 @lg:py-4 px-6 @lg:px-8">
        무료로 시작하기
      </Button>
      <Button
        type="button"
        className="rounded-full bg-transparent hover:bg-transparent text-base @lg:text-xl h-auto py-3 @lg:py-4 px-6 @lg:px-8"
        variant={'outline'}
      >
        더 많은 기능 사용하기
      </Button>
    </div>
  );
};
