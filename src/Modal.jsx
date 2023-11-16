export default function Modal(props) {
   return (
      <div class="modal">
            <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title">{props.title}</h5>
                  <button
                     type="button"
                     class="btn-close"
                     onclick={()=>props.setIsOpen(false)}
                  >X</button>
               </div>
               <div class="modal-body">
                  <p>{props.text}</p>
               </div>
               {props.noOfItemToBeDeleted() === 0 ? null : (<div class="modal-footer">
                  <div class="btn-group">
                      <button
                         type="button"
                         class="btn-confirm"
                      onclick={()=>{
                        props.setIsOpen(false);
                        props.handleOneOrMoreDeleteItem();
                      }}>
                         Yes
                      </button>
                      <button 
                      type="button" 
                      class="btn-reject"
                      onclick={()=> props.setIsOpen(false)}>
                         No
                      </button>
                  </div>
               </div>)}
            </div>
         </div>
      </div>
   );
}
