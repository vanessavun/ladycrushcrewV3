import { PageHeaderDiv, PageEmote } from './page-header-styles';

type PageHeaderType = {
    title: string,
    emote: string
}

const PageHeader = ({ title, emote }: PageHeaderType) => {

  return (
    <PageHeaderDiv>
        <h1>
            {title}<PageEmote>{emote}</PageEmote>
        </h1>
    </PageHeaderDiv>
  )
}

export default PageHeader