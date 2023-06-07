'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  const [mediaType, setMediaType] = useState<string | null>(null)

  function onMediaSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const mediaFile = files[0]
    const mediaType = mediaFile.type.split('/')[0]

    const previewURL = URL.createObjectURL(mediaFile)

    setPreview(previewURL)
    setMediaType(mediaType)
  }

  return (
    <>
      <input
        onChange={onMediaSelected}
        type="file"
        name="coverUrl"
        id="media"
        accept="image/*, video/*" // Accept both image and video files
        className="invisible h-0 w-0"
      />

      {preview && (
        <>
          {mediaType === 'image' && (
            // eslint-disable-next-line
            <img
              src={preview}
              alt=""
              className="aspect-video w-full rounded-lg object-cover"
            />
          )}
          {mediaType === 'video' && (
            <video
              src={preview}
              controls // Add controls to enable video playback
              className="w-full rounded-lg"
            />
          )}
        </>
      )}
    </>
  )
}
