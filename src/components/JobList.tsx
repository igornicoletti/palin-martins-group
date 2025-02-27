
interface JobListProps {
  filteredPositions: {
    category: string
    jobs: { title: string; desciption: string; button: { href: string; action: string } }[]
  }[]
}

export const JobList = ({ filteredPositions }: JobListProps) => {
  return (
    <div className="flex flex-col gap-16">
      {filteredPositions.map((category) => (
        <div key={category.category} className="flex flex-col gap-8">
          <h2 className="text-xl font-normal text-palin">{category.category}</h2>
          <div className="flex flex-col gap-8">
            {category.jobs.map((job) => (
              <div key={job.title} className="flex flex-col border-l-2 border-l-palin/25 pl-6">
                <h3 className="text-lg font-normal">{job.title}</h3>
                <p className="mt-2 leading-relaxed tracking-wide font-light text-background-typography">{job.desciption}</p>
                <a href={job.button.href} className="mt-4 text-base font-light text-palin hover:underline">{job.button.action}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
