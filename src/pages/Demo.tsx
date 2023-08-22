import { useToast } from "../libs/react-toast";

export const Demo = () => {
  const { showToast } = useToast();

  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-3 text-center">
        Demo <code className="bg-slate-300 rounded-md px-2 py-1">react-toast</code>
      </h1>
      <h2 className="text-sm text-slate-700 text-center">By S1mpler | Stanislav Dior</h2>

      <article>
        <p className="text-2xl border-b-slate-400 pt-3">Basic Toasts Default Duration & Title</p>
        <small className="py-3">(6 seconds default)</small>
        <hr />
        <div className="flex justify-center gap-6 py-8">
          <button className='px-4 py-2 rounded-sm bg-green-300' onClick={() => showToast({
              message: 'Your changes have been saved successfully.',
              type: 'success',
            })}>
              Show Success
          </button>

          <button className='px-4 py-2 rounded-sm bg-yellow-300' onClick={() => showToast({
              message: 'Your account balance is running low. Consider topping up to avoid service interruption.',
              type: 'warning',
            })}>
              Show Warning
          </button>

          <button className='px-4 py-2 rounded-sm bg-red-300' onClick={() => showToast({
              message: 'Uh-oh! Something went wrong while processing your request. Please try again later.',
              type: 'danger',
            })}>
              Show Danger
          </button>
        </div>
      </article>

      <article>
        <p className="text-2xl border-b-slate-400 pt-3">Custom Duration Toasts</p>
        <small className="py-3">(Custom duration)</small>
        <hr />
        <div className="flex justify-center gap-6 py-8">
          <button className='px-4 py-2 rounded-sm bg-green-300' onClick={() => showToast({
              message: 'Your changes have been saved successfully.',
              type: 'success',
              duration: 2,
            })}>
              Show Success (2 seconds)
          </button>

          <button className='px-4 py-2 rounded-sm bg-yellow-300' onClick={() => showToast({
              message: 'Your account balance is running low. Consider topping up to avoid service interruption.',
              type: 'warning',
              duration: 3,
            })}>
              Show Warning (3 seconds)
          </button>

          <button className='px-4 py-2 rounded-sm bg-red-300' onClick={() => showToast({
              message: 'Uh-oh! Something went wrong while processing your request. Please try again later.',
              type: 'danger',
              duration: 10,
            })}>
              Show Danger (10 seconds)
          </button>
        </div>
      </article>

      <article>
        <p className="text-2xl border-b-slate-400 pt-3">Custom Title Toasts</p>
        <small className="py-3">(Custom message, title)</small>
        <hr />
        <div className="flex justify-center gap-6 py-8">
          <button className='px-4 py-2 rounded-sm bg-green-300' onClick={() => showToast({
              title: 'Very cool custom title!',
              message: 'Your changes have been saved successfully.',
              type: 'success',
            })}>
              Show Success Custom title
          </button>

          <button className='px-4 py-2 rounded-sm bg-yellow-300' onClick={() => showToast({
              title: 'Important Warning! Please read it till the end! I really mean it by typing a very long title to test the truncation',
              message: 'Your account balance is running low. Consider topping up to avoid service interruption.',
              type: 'warning',
            })}>
              Show Warning Long title
          </button>

          <button className='px-4 py-2 rounded-sm bg-red-300' onClick={() => showToast({
              title: 'Very long toast message',
              message: 'Uh-oh! Something went wrong while processing your request. Please try again later. Uh-oh! Something went wrong while processing your request. Please try again later. Uh-oh! Something went wrong while processing your request. Please try again later. Uh-oh! Something went wrong while processing your request. Please try again later. Uh-oh! Something went wrong while processing your request. Please try again later. Uh-oh! Something went wrong while processing your request. Please try again later.',
              type: 'danger',
            })}>
              Show Danger Long Message
          </button>
        </div>
      </article>
    </section>
  )
}