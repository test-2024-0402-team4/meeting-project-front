export const QUILL_MODULES = (quillImageHandler) => {
    return {
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'], 
                [{ 'color': [] }, { 'background': [] }],         
                [{ 'font': [] }],
                [{ 'align': [] }],
                ['image'],
                ['code-block']
            ],
            handlers: {
                image: quillImageHandler
            }
        }
    }
}