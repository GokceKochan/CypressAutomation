class SelectPage {

    elements = {

        'fileUpload': () => cy.get('#file-upload'),
        'fileSubmit': () => cy.get('#file-submit'),
        'fileUploadedText': () => cy.get('.example>h3'),
        'uploaded_files': () => cy.get('#uploaded-files'),
        'multipleUpload': () => cy.get('#filesToUpload'),
        'multipleUploadText': () => cy.get('#fileList>li')
    }

    uploadFile(filePath) {
        this.elements.fileUpload().selectFile(filePath)
    }


    submitFile() {
        this.elements.fileSubmit().click()
    }

    assertFile(fileName) {
        this.elements.fileUploadedText().should('have.text', 'File Uploaded!')
        this.elements.uploaded_files().should('contain.text', fileName)
    }


    uploadMultipleFiles() {
        return this.elements.multipleUpload()
    }

    assertMultipleFiles() {
        return this.elements.multipleUploadText()
    }



}

export const selectPage = new SelectPage()