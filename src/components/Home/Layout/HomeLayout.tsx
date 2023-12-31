import { useBaseComponent } from '@base/BaseComponent';
import { HomeHeader } from '../Header/HomeHeader';
import { StyledHomeBodyWrapper, StyledHomeLayout } from './HomeLayoutStyle';
import { IHomeLayoutProps } from './HomeLayoutType';

export const HomeLayout = (props: IHomeLayoutProps) => {
  useBaseComponent();
  const { children } = props;
  return <StyledHomeLayout>
    <HomeHeader />
    <StyledHomeBodyWrapper>
      {children}
    </StyledHomeBodyWrapper>
  </StyledHomeLayout>;
};
