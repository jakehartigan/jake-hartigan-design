import { useState } from 'preact/hooks';

const SubscribeForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      alert('There was an issue with your submission. Please try again.');
    }
  };

  return (
    <div class="max-w-lg mx-auto my-6 p-4 bg-gray-800 rounded-md text-white border border-gray-400">
      {isSubmitted ? (
        <div class="ml-form-successBody mt-4">
          <div class="ml-form-successContent">
            <h4 class="text-2xl font-bold">Thank you!</h4>
            <p>You have successfully joined our subscriber list.</p>
          </div>
        </div>
      ) : (
        <div>
          <div class="py-2">
            <form
              class="space-y-4"
              action="https://assets.mailerlite.com/jsonp/1027420/forms/127043996576908561/subscribe"
              method="post"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <div class="">
                <label for="name" class="block text-sm font-semibold">
                  Name
                </label>
                <input
                  aria-label="name"
                  type="text"
                  class="form-control mt-1 block w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  name="fields[name]"
                  placeholder=""
                  autoComplete="given-name"
                />
              </div>
              <div class="">
                <label for="email" class="block text-sm font-semibold">
                  Email
                </label>
                <input
                  aria-label="email"
                  aria-required="true"
                  type="email"
                  class="form-control mt-1 block w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  name="fields[email]"
                  placeholder=""
                  autoComplete="email"
                />
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <div class="flex justify-center">
                <button
                  type="submit"
                  class="bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                >
                  Send Me The DIY Design Newsletter
                </button>
                <button disabled class="loading hidden ml-3 bg-primary text-white font-semibold py-2 px-4 rounded-md">
                  <div class="ml-form-embedSubmitLoad inline-block w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                  <span class="sr-only">Loading...</span>
                </button>
              </div>
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribeForm;
