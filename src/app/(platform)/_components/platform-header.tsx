import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

type Props = React.HTMLAttributes<HTMLElement>;

export const PlatformHeader = ({ className }: Readonly<Props>) => {
  return (
    <header className={cn('@container', 'absolute top-0 left-0 right-0 z-50 bg-transparent', className)}>
      <section
        className={cn(
          'flex justify-between max-w-screen-2xl mx-auto px-8 py-4', //
          'mt-0 @md:mt-4 text-sm @md:text-xl',
        )}
      >
        <div></div>

        <nav className="flex items-center gap-x-4 @md:gap-x-8">
          <Link href={'/sign-in'} className="invisible @md:visible">
            로그인
          </Link>
          <Button type="button" className="px-0 py-0 hover:bg-transparent focus-visible:ring-0" variant={'ghost'}>
            <RxHamburgerMenu className="size-6 @md:size-10" />
          </Button>
        </nav>
      </section>
    </header>
  );
};
