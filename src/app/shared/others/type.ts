export interface LoginInfo {
    userId: number
    role: number
}

export interface LoginRely {
    code: number
    msg: string
    data: LoginInfo

}

export interface Login {
    username: string
    password: string
}

export interface Student {
    studentName: string
    email: string
    attRate: number
    className: string
    id: number
    pid: number
}

export interface Class {
    classId: number
    className: string
    totalStudents: number
    attRate: number
    totalMarks: number
}

export interface Mark {
    stId: number
}