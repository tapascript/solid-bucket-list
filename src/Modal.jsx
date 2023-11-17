export default function Modal(props) {
   return (
      <div class="flex justify-center items-center w-full h-full absolute z-[100] bg-[rgba(1,1,1,0.5)] inset-0 backdrop-blur-sm">
            <div class="max-w-[400px] min-w-[190px] h-auto p-4 bg-white text-black sm:py-8 sm:px-6 mx-4 sm:mx-0">
            <div>
               <div class="flex justify-between items-center h-[50px]">
                  <h5 class="modal-title font-bold">{props.title}</h5>
                  <button
                     type="button"
                     class="btn-close py-2 px-4 bg-gray-200 hover:bg-gray-300"
                     onclick={()=>props.setIsOpen(false)}
                  >X</button>
               </div>
               <div class="modal-body py-4">
                  <p class="text-sm sm:text-2xl">{props.text}</p>
               </div>
               {props.noOfItemsToBeDeleted() === 0 ? null : (<div class="modal-footer flex justify-end items-center">
                  <div class="btn-group flex justify-center items-center gap-4">
                      <button
                         type="button"
                         class="btn-confirm bg-[limegreen] text-white font-bold py-2 px-4 transition-all duration-75 scale-100 ease-out rounded-md hover:scale-[1.1]"
                      onclick={()=>{
                        props.setIsOpen(false);
                        props.handleOneOrMoreDeleteItem();
                      }}>
                         Yes
                      </button>
                      <button 
                      type="button" 
                      class="btn-reject bg-[crimson] text-white font-bold py-2 px-4 transition-all duration-75 scale-100 ease-out rounded-md hover:scale-[1.1]"
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
