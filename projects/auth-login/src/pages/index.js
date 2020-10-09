import { FrameFullCenter } from 'ui-library/stories/templates'
import { Page } from '../containers'

export default function IndexPage() {
  return (
    <Page className="bg-white">
      <FrameFullCenter fullScreen={false}>
        <div className="py-20 bg-green-300">
          <h1 className="text-5xl text-center text-black">Nusszopf Auth0 Login Page</h1>
        </div>
      </FrameFullCenter>
    </Page>
  )
}
