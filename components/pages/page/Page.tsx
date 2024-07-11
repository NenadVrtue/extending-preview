// import RenderSections from '@/components/global/RenderSections/index'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title, content } = data ?? {}
  console.log(content)
  return (
    <div>
      <div className="mb-14">
        <h1>{title}</h1>
      </div>
      {/* <RenderSections sections={content} /> */}

      {/* Body */}
      {body && (
        <CustomPortableText
          paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
          value={body}
        />
      )}
    </div>
  )
}

export default Page
