const CreateHTML = () => {
    const btn = () => {
        const button = document.createElement('button')
        button.classList.add('btn')
        button.classList.add('btn-primary')
        button.setAttribute('data-toggle')
        return  button;
    }

}

function appendToAllProjects(project, dropdown) {
    dropdown.insertAdjacentHTML('beforeend',
        ` <a class="dropdown-item" data-target="#mymodal">${project.title}</a>`)
}

export default {
    appendToAllProjects
}
`            <!-- Button to Open the Modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                Open modal
            </button>

            <!-- The Modal -->
            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body" contenteditable="true">
                            Modal body..
                        </div>

                        <!-- Modal footer -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
`