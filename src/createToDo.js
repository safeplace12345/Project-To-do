export class CreateToDo{
    constructor(title,date,id){
        this.title = title,
        this.date = date,
        this.description = '',
        this.dueDate = '',
        this.priority = 0,
        this.notes = '',
        this.status = false,
        this.id = id
    }
    getDueDate(){
        return this.dueDate;
    }
    setDueDate(value){
        return this.dueDate = value;
    }
    getPriority(){
        return this.priority;
    }
    setPriority(val){
        return this.priority = val
    }
    getNotes(){
        return this.notes;
    }
    setNotes(val){
        return this.notes = val
    }
    setStatus(val){
        return this.status = val;
    }
}

// .At a minimum they should have a title, description, dueDate and priority.You might also want to include notes or even a checklist