export default function DirectionsSection({ steps }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Directions</h2>

      <div className="space-y-10">
        {steps.map((step) => (
          <div key={step.id}>
            <h3 className="font-semibold mb-2">
              {step.step_number}. {step.text.split("\n")[0]}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {step.text}
            </p>

            {step.image && (
              <img
                src={step.image}
                className="w-full rounded-2xl my-4"
                alt="step"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
