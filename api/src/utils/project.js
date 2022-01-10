const reduceProjectTasks = (items, project_id)=> {
  const projectTasks = []
  items.forEach(id => {
    projectTasks.push({
      project_id,
      id
    })
  })
  return projectTasks
}


module.exports = {
  reduceProjectTasks
}