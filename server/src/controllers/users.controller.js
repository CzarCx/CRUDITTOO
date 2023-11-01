import Books from '../models/users.model.js'

export const addNewBook = async (req,res)=>{
    const { name,number_pages,name_creator } = req.body;
    try {
        const bookFound = await Books.findOne({ where: { name } });
        if (bookFound) {
            return res.status(400).json([`El libro ${name} ya existe`])
        }
        const newBook = {
            name,
            number_pages,
            name_creator
        }
        const bookSaved = await Books.create(newBook);
        res.status(200).json({
            id: bookSaved.id,
            name: bookSaved.name,
            number_pages: bookSaved.number_pages,
            name_creator: bookSaved.name_creator
        })

    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}

export const getBook = async (req,res)=>{
    const { id } = req.params;
    try {
        const bookFound = await Books.findByPk(id)
        if (!bookFound) {
            return res.status(400).json([`No se encontro el libro`])
        }
        res.status(200).json({
            id: bookFound.id,
            name: bookFound.name,
            number_pages: bookFound.number_pages,
            name_creator: bookFound.name_creator,
        })
    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}

export const getAllBooks = async(req,res)=>{
    try {
        const books = await Books.findAll();
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}

export const editBook = async (req,res)=>{
    const { name,number_pages,name_creator } = req.body;
    const { id } = req.params;
    try {
        const bookFound = await Books.findByPk(id)
        if (!bookFound) {
            return res.status(400).json([`No se encontró el libro`])
        }
        const newBook = {
            name,
            number_pages,
            name_creator
        }
        const bookSaved = await Books.update(newBook,{where:{id}})
        res.status(200).json({
            name: bookSaved.name,
            number_pages: bookSaved.number_pages,
            name_creator: bookSaved.name_creator
        })

    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}

export const deleteBook = async (req,res)=>{
    const { id } = req.params;
    try {
        const bookFound = await Books.findByPk(id)
        if (!bookFound) {
            return res.status(400).json([`No se encontro el libro`])
        }
        const bookDeleted = await Books.destroy({where: {id}})
    } catch (error) {
        res.status(500).json([`Ocurrio un error: ${error.message}`])
    }
}