import type { ContactInfo } from "~/data/contact";

export default function ContactCard({ info }: { info: ContactInfo }) {
  return (
    <div className="p-6 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
      <div className="space-y-4 text-gray-800">
        <div className="flex flex-col items-center gap-1">
          <span className="text-gray-500">Name</span>
          <span className="font-medium">{info.name}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-gray-500">Email</span>
          <a className="font-medium text-blue-700 hover:underline break-words" href={`mailto:${info.email}`}>{info.email}</a>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-gray-500">Phone</span>
          <a className="font-medium text-blue-700 hover:underline break-words" href={`tel:${info.phone}`}>{info.phone}</a>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-gray-500">LinkedIn</span>
          <a className="font-medium text-blue-700 hover:underline break-words" href={info.linkedInUrl} target="_blank" rel="noreferrer">View profile</a>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-gray-500">GitHub</span>
          <a className="font-medium text-blue-700 hover:underline break-words" href={info.githubUrl} target="_blank" rel="noreferrer">View repositories</a>
        </div>
      </div>
    </div>
  );
}


