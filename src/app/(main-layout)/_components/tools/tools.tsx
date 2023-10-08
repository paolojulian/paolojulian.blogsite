import SectionHeading from '@/_components/common/section-heading';
import TextHighlight from '@/_components/common/text-highlight/text-hightlight';
import TitleWithBullet from '@/_components/common/title-with-bullet';
import Text from '@/_components/common/typography/text';
import Container from '@/_components/layouts/container';
import { FunctionComponent } from 'react';

interface Props {
  // no props
}

const Tools: FunctionComponent<Props> = () => {
  return (
    <div className='max-w-screen-2xl mx-auto w-full'>
      <Container className='py-12 lg:py-24 h-full'>
        <SectionHeading RightContent='03' title='Tools'></SectionHeading>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 py-12 h-full relative'>
          <Text className='text-4xl lg:text-6xl font-medium col-span-1 leading-tight'>
            These are the <TextHighlight text='tools' /> I prefer to use as of
            now.
          </Text>
          <div className='flex flex-col col-span-2'>
            <div className='flex flex-row py-8 border-b first:border-t border-slate-200/70 items-start'>
              <div className='flex-1'>
                <TitleWithBullet title={'Front-end'} />
              </div>
              <div className='flex-1 text-lg'>
                <Text>Next.js</Text>
                <Text>React.js</Text>
                <Text>TailwindCSS</Text>
                <Text>Typescript</Text>
                <Text>GraphQL</Text>
              </div>
            </div>
            <div className='flex flex-row py-8 border-b first:border-t border-slate-200/70 items-start'>
              <div className='flex-1'>
                <TitleWithBullet title={'Back-end'} />
              </div>
              <div className='flex-1 text-lg'>
                <Text>Node.js</Text>
                <Text>AWS</Text>
                <Text>Contentful</Text>
                <Text>Websocket</Text>
                <Text>GraphQL</Text>
              </div>
            </div>
            <div className='flex flex-row py-8 border-b first:border-t border-slate-200/70 items-start'>
              <div className='flex-1'>
                <TitleWithBullet title={'Design'} />
              </div>
              <div className='flex-1 text-lg'>
                <Text>Figma</Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
