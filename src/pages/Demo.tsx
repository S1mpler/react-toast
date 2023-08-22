import { useToast } from "../libs/react-toast";

export const Demo = () => {
  const { showToast } = useToast();

  return (
    <section>
      <h1 className="text-3xl font-bold underline mb-3">
        Demo
      </h1>
      <div className='flex gap-4 justify-center'>
        <button className='button' onClick={() => showToast('Your account balance is running low. Consider topping up to avoid service interruption.', 'warning')}>Show Warning</button>
        <button onClick={() => showToast('Your changes have been saved successfully.', 'success', 2)}>Show Info</button>
        <button onClick={() => showToast('Uh-oh! Something went wrong while processing your request. Please try again later.', 'danger')}>Show Danger</button>
      </div>
      <div className='h-screen w-screen'></div>
    </section>
  )
}