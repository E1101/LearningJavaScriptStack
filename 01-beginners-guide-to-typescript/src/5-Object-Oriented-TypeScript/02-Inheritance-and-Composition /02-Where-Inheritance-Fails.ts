/**
 * [ Where Inheritance Fails ]
 *
 * A specific example of when inheritance fails can be applied to our Product example:
 * imagine we want to create an OmniProduct that can print weight and print a platform.
 * This new class needs functionality from both DigitalProduct and PhysicalProduct,
 * which is not possible as classes can extend at most one other class.
 *
 * This problem is called the diamond problem because of the shape produced by
 * the class dependency graph
 */
