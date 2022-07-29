export class GradeSchool {
  readonly db: DB = {}

  roster() {
    return JSON.parse(JSON.stringify(this.db))
  }

  add(name: string, grade: number) {
    const gradeList = this.db[grade] || []

    const oldGrade = Object.keys(this.db)
      .find(key => this.db[parseInt(key)].includes(name))

    if (oldGrade) {
      this.delete(name, parseInt(oldGrade))
    }

    this.db[grade] = [...gradeList, name].sort()
  }

  private delete(name: string, grade: number) {
    const gradeList = this.db[grade] || []
    this.db[grade] = gradeList.filter(student => student !== name)
  }

  grade(grade: number) {
    const gradeList = this.db[grade] || []
    return [...gradeList]
  }
}

type DB = { [grade: number]: string[] }
