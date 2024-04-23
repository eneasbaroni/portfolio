import Work from './models/works'
import IWork from "../../lib/definitions";

class workDAO {
    static async getAll() {
        const works = await Work.find();
        return works;
    }

    static async getEn() {
        const works = await Work.find({language: "en"});
        return works;
    }

    static async getEs() {
        const works = await Work.find({language: "es"});
        return works;
    }

    static async getById(id: string) {
        const work = await Work.findById(id);
        return work;
    }

    static async create(work: IWork) {
        const newWork = new Work(work);
        const savedWork = await newWork.save();
        return savedWork;
    }

    static async update(id: string, work: IWork) {
        const updatedWork = await Work.findByIdAndUpdate(id, work, {new: true});
        return updatedWork;
    }

    static async delete(id: string) {
        const deletedWork = await Work.findByIdAndDelete(id);
        return deletedWork;
    }

    static async createMany (works: IWork[]) {
        const newWorks = await Work.insertMany(works);
        return newWorks;
    }
}

export default workDAO

