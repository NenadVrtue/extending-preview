import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { loadSettings } from '@/sanity/loader/loadQuery'

import RenderSectionsLayout from './RenderSectionsLayout'
const RenderSectionsPreview = dynamic(() => import('./RenderSectionsPreview'))

export async function Navbar() {
  const initial = await loadSettings()

  if (draftMode().isEnabled) {
    return <RenderSectionsPreview initial={initial} />
  }

  return <RenderSectionsLayout data={initial.data} />
}
