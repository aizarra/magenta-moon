<script lang="ts">
  import { onMount } from 'svelte';

  async function handleSubmit(event: Event) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch('/pages/api/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success - redirect or show a message
        window.location.href = '/thankyou'; // Redirecting to a thank you page
      } else {
        // Handle errors
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<div class="divider bg-gray-200 h-0.5 w-20 mx-auto"></div>
<div class="form-container">
  <h2 class="text-center text-inherit">Contact Me</h2>
  <form
  on:submit={handleSubmit} class=" bg-white text-black" acceptCharset="UTF-8" enctype="multipart/form-data"
  >
    <div class="mb-3 form-row">
      <div class="mr-3 mb-3 form-col">
        <label for="name_input">Your Name:</label>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div class="form-col">
        <label for="email_input">Email:</label>
        <input type="email" name="email" placeholder="name@website.com" />
      </div>
    </div>
    <div class="mb-3">
      <label for="message_input">Message:</label>
      <textarea name="message" rows="6" class="w-full border border-gray"></textarea>
    </div>
    <div class="mb-10">
      <button class="btnx border-black border p-2 hover:bg-gray-300 dark:border-white" type="submit">Send</button>
    </div>
  </form>
</div>